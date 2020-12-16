import builder from '../index'

const g = builder()
const json = g.Game('myFirstVFProject', '1.0.0')
  .size(890, 500)
  .baseUrl('')
.Asset()
  .Image('dinoImage').url('./assets/dino.png')
.Component()
  .Text('title').size(100, 0).color(g.black)
  .Image('dino').size(83, 138).position(g.center().x, 140)
  .Custom('root').use('dino', 'title')
.Scene('root').use('root')
.toJson();
console.log(json)