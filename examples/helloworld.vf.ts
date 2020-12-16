/// <reference path="../typings/index.d.ts" />
Game('myFirstVFProject', '1.0.0')
  .size(890, 500)
  .baseUrl('https://static.domain/module/game/')
.Assets()
  .Image('dinoImage').url('./assets/dino.png')
.Component()
  .Text('title').size(100, 0).color(black)
  .Image('dino').size(83, 138).position(center.x, 140)
  .Custom('root').use('dino', 'title')
.Scene('root').use('root');

// npm run helloworld
/*
{
  name: 'myFirstVFProject',
  version: '1.0.0',
  baseUrl: 'https://static.domain/module/game/',
  width: 890,
  height: 500,
  assets: {
    dinoImage: { type: 'image', name: 'dinoImage', url: './assets/dino.png' }
  },
  scenes: [ { id: 'root' } ],
  components: {
    title: {
      id: 'title',
      type: 'Label',
      style: { color: '#000' },
      width: 100,
      height: 0,
      children: []
    },
    dino: {
      id: 'dino',
      type: 'Image',
      style: {},
      width: 83,
      height: 138,
      children: [],
      x: 445,
      y: 140
    },
    root: {
      id: 'root',
      type: 'Custom',
      style: {},
      width: 0,
      height: 0,
      children: [ { id: 'dino' }, { id: 'title' }, { id: 'root' } ]
    }
  }
}
*/