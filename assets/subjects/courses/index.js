import angularCourse from './angular'
import javaScript from './javaScript'
import esModules from './esmodules'
import redux from './redux'
import javascriptCraftmanship from './javascriptCraftmanship'
import typescript from './typescript'
import gitflow from './git-flow'
import nestJs from './nest'
import react from './react'

export default [
  javaScript,
  javascriptCraftmanship,
  esModules,
  react,
  typescript,
  nestJs,
  angularCourse,
  gitflow,
  redux,
].map((s) => ({ ...s, type: 'course' }))
