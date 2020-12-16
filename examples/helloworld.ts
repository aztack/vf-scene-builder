import { requireScene } from '../index'
import { resolve } from 'path'
const json = requireScene(resolve(__dirname, './helloworld.vf.ts'))
console.log(json)