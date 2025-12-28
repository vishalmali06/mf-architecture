import { ReactIcon, HtmlIcon, GitIcon, MongoIcon, PostmanIcon, NodeIcon, ExpressIcon } from './Icons'
import '../../styles/orbit.css'

export default function OrbitIcons() {
  return (
    <div className="orbit-wrap">
        <div className="orbit">
          <span className="o-item i1"><ReactIcon /></span>
          <span className="o-item i2"><HtmlIcon /></span>
          <span className="o-item i3"><GitIcon /></span>
          <span className="o-item i4"><MongoIcon /></span>
          <span className="o-item i5"><PostmanIcon /></span>
          <span className="o-item i6"><NodeIcon /></span>
          <span className="o-item i7"><ExpressIcon /></span>
        </div>
      </div>
  )
}
