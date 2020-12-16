const util = require('util');
const fs = require('fs');

export type IGame = {
  name: string,
  version: string,
  baseUrl: string,
  width: number,
  height: number;
}

function n(id: string, type: string) {
  return {
    id,
    type,
    style: {},
    width: 0,
    height: 0,
    children: []
  };
};

type Color = string;

type Coordinate = {x: number, y: number};

export class VfBuilder {
  $game: IGame = {name: '', version: '', baseUrl: '', width: 0, height: 0}
  $assets = {}
  $scenes: any[] = []
  $components = {}

  // internal use only
  _$ctn: any = null
  _$: any

  red = "#f00"
  green = "#0f0"
  blue = "#00f"
  white = "#fff"
  black = "#000"

  _$push(id: string): this {
    if (Array.isArray(this._$ctn)) {
      this._$ctn.push(this._$);
    } else {
      this._$ctn[id] = this._$;
    }
    return this;
  }

  Game(name: string, version: string): this {
    const $ = this._$ = this.$game;
    $.name = name
    $.version = version
    return this;
  }
  /*attribute*/ size(width: number, height: number): this {
    this._$.width = width;
    this._$.height = height;
    return this;
  }
  /*attribute*/ baseUrl(url: string): this {
    this.$game.baseUrl = url;
    return this;
  }
  /*attribute*/ get center(): Coordinate {
    return {x: this.$game.width / 2, y: this.$game.height / 2};
  }
  Assets(): this {
    this._$ctn = this.$assets;
    return this;
  }
  Image(id: string): this {
    if (this._$ctn === this.$assets) {
      this._$ = {
        type: 'image',
        name: id
      };
    } else {
      this._$ = n(id, 'Image');
    }
    this._$push(id);
    return this;
  }
  Text(id: string): this {
    this._$ = n(id, 'Label');
    this._$push(id);
    return this;
  }
  Custom(id: string): this {
    this._$ = n(id, 'Custom');
    this._$push(id);
    return this;
  }
  Component(): this {
    this._$ctn = this.$components;
    return this;
  }
  Scene(id: string): this {
    this.$scenes.push({id})
    return this;
  }

  /*attribute*/ url(url: string): this {
    this._$.url = url;
    return this;
  }

  /*attribute*/ use(...ids: string[]): this {
    ids.forEach(id => this._$.children.push({id}))
    return this;
  }

  /*attribute*/ color(color: Color) {
    this._$.style.color = color;
    return this;
  }

  /*attribute*/ position(x: number, y: number) {
    this._$.x = x;
    this._$.y = y;
    return this;
  }

  toJson() {
    return {
      ...this.$game,
      assets: this.$assets,
      scenes: this.$scenes,
      components: this.$components
    }
  }
}

export function create() {
  return new VfBuilder()
}

export function requireScene(path: string) {
  const code = fs.readFileSync(path).toString().trim().replace('function () {', '').replace(/\}\s*;?\s*$/g, '');
  const fn = new Function ('builder', `with (builder) {${code}};return builder.toJson()`)
  const project = fn(create());
  return util.inspect(project, false, 5);
}