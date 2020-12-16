  type Color = string;
  type Coordinate = {x: number ,y: number};

  interface size<T> {
    (width: number, height: number): T
  }
  interface baseUrl<T> {
    (url: string): T
  }
  interface url<T> {
    (url: string): T
  }
  interface position<T> {
    (x: number, y: number): T
  }
  interface use<T> {
    (...ds: string[]): T
  }

  interface IGame {
    size: size<IGame>;
    baseUrl: baseUrl<IGame>;
    Assets(): IAssets;
  }

  interface IAssets {
    Image(id: string): IImageAsset
    Component(): IComponent
  }

  interface IImageAsset {
    url(url: string): IAssets
  }

  interface IComponent {
    Image(id: string): IImage;
    Text(id: string): IText;
    Custom(id: string): ICustom;
    Scene(id: string): IScene;
    position: position<IComponent>;
  }

  interface IText extends IComponent {
    size: size<IText>;
    color(color: Color): IText;
  }

  interface IImage extends IComponent {
    size: size<IImage>;
  }

  interface ICustom extends IComponent {
    use: use<ICustom>
  }

  interface IScene {
    use: use<IScene>
  }

  declare function Game(name: string, version: string): IGame;
  declare const black: string;
  declare const white: string;
  declare const red: string;
  declare const green: string;
  declare const blue: string;
  declare const center: Coordinate;