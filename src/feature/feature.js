import {globSync} from 'glob'
import path from 'path'

// TODO: another day
// const files = await globSync('**/*.feature.js')

const InteractionMenuId = Object.freeze({
    RegisterEvent: 'eventregister',
    DeregisterEvent: 'eventderegister',
})

const files = [
  './VerifyStreakSubmission/verifysubmit.feature.js',
  './VerifyStreakSubmission/streak.feature.js',
  './EventSignin/eventregister.feature.js',
  './EventList/getevents.feature.js',
  './EventCreator/orgevent.feature.js'
]
const featureArray = []

console.log(files)
for(const file of files) {
    console.log(file);
    
    const feature = await import(file)
    featureArray.push(feature.default)
}

console.log('feature ',featureArray)

export InteractionMenuId
export default featureArray