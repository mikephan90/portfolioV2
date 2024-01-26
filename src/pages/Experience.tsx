import PageHeader from "../components/PageHeader";
import ExperienceDetail from "../components/ExperienceDetail";
import data from '../data/data.json'

export default function Experience() {
  const workData = JSON.parse(JSON.stringify(data));
  return (
    <>
      <PageHeader header="My experience" />
      <div id="exp">
        <ExperienceDetail data={data.workExperience[0]}/>
        <ExperienceDetail data={data.workExperience[1]}/>
      </div>
    </>
  )
}