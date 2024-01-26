export default function ExperienceDetail({data}: any) {
  return (
    <div id="exp-detail">
      <div className="jobHeader">
        <span className="jobName">{data.company}</span>
        <span className="jobDate">{data.startDate} - {data.endDate}</span>
        <span className="jobTitle">{data.title}</span>
      </div>
      <p>
         collapse this and select add arrow to expand details
        {/*{data.description}*/}
      </p>
    </div>
  )
}