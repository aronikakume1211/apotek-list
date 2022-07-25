//  /components / Event.js

import Link from 'next/link';
import Image from 'next/image';
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

export default function Job({ job, }) {
  // console.log(job);
  return (
    <div className="card mb-3" style={{ width: '18rem' }}>
      <div className="card-body">


        <Link href={`/jobs/${job.slug}`}>

          <a >
            <h5 className="card-title">{job.acf.job_title}</h5>
          </a>
          {/* <a className="btn btn-primary">See more</a> */}
        </Link>
      </div>
    </div>
  );
}