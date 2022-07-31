// /components/Post.js

import Link from 'next/link';
import Image from 'next/image';
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

import { getDate } from '../utils/utils';

export default function Post({ post, featuredMedia }) {
  return (
    <div className="mt-6 mb-5 mr-4 bg-slate-500 rounded-r-xl " style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <Link href={`/${post.slug}`}>
            <a>
              <Image
                src={featuredMedia}
                width={280}
                height={200}
                alt=''
              />
            </a>
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{post.title.rendered}</h5>
            {/* <div
              className="card-text"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></div> */}
            <p className="card-text">
              <small className="text-muted">On {getDate(post.modified)}</small>
            </p>
            <Link href={`/${post.slug}`}>
              <a className="btn btn-primary">See more</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}