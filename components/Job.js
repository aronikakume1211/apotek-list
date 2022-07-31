
export default function Job({ job, }) {
  return (
    <div className="careers-card card mb-10 mr-10">
      <div className="card-body">
        <h5 className="card-title text-3xl font-light m-6 capitalize">{job.acf.job_title}</h5>
        <p className='m-6 text-lg'>
          {job.acf.job_description}
        </p>
        <hr className='h-1 bg-red-300' />
        <div className='flex justify-around m-10 mb-28'>
          <div className='m-6 text-lg' >
            <h2 className="text-red-400 text-3xl mb-4 capitalize">Required Skills</h2>
            <div dangerouslySetInnerHTML={{ __html: job.acf.familiarity_with }}></div>
          </div>
          <div className='m-6 text-lg'>
            <h2 className="text-red-400 text-3xl mb-4 capitalize">Familiarity With</h2>
            <div dangerouslySetInnerHTML={{ __html: job.acf.required_skills }}></div>
          </div>
          <div className='m-6 text-lg' >
            <p className='mb-4 mt-2'>Please take a few minutes to fill in your details in the Google Form linked below.</p>
            <a href={job.acf.google_form_link} className="text-red-300">
              Recruitment Form - {job.acf.google_form_link}
            </a>
            <div>
              Note that if you wish to apply for an internship,
              you may use the form above
              and
              <p>
                we will evaluate your resume accordingly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
