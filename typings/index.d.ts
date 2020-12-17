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
  /**
   * 游戏画布尺寸
   *
   * @type {size<IGame>}
   * @memberof IGame
   */
  size: size<IGame>;
  baseUrl: baseUrl<IGame>;
  /**
   * 开始添加游戏素材
   *
   * @return  {IAssets} [return description]
   */
  Assets(): IAssets;
}

interface IAssets {
  /**
   * 增加图片素材
   *
   * @param {string} id
   * @returns {IImageAsset}
   * @memberof IAssets
   */
  Image(id: string): IImageAsset;
  /**
   * 增加音频资源
   *
   * @param {string} id
   * @returns {IAudioAsset}
   * @memberof IAssets
   */
  Audio(id: string): IAudioAsset;
  /**
   * 增加视频资源
   *
   * @param {string} id
   * @returns {IVideoAsset}
   * @memberof IAssets
   */
  Video(id: string): IVideoAsset;
  /**
   * 增加龙骨资源
   *
   * @param {string} id
   * @returns {IDragonbonesAsset}
   * @memberof IAssets
   */
  Dragonbones(id: string): IDragonbonesAsset;
  /**
   * 增加Spine资源
   *
   * @param {string} id
   * @returns {ISpineAsset}
   * @memberof IAssets
   */
  Spine(id: string): ISpineAsset;
  /**
   * 添加游戏组件
   *
   * @returns {IComponent}
   * @memberof IAssets
   */
  Component(): IComponent
}

interface IImageAsset {
  url(url: string): IAssets
}

interface IAudioAsset {
  url(url: string): IAssets
}

interface IVideoAsset {
  url(url: string): IAssets
}

interface IDragonbonesAsset {
  url(url: string): IAssets
}

interface ISpineAsset {
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