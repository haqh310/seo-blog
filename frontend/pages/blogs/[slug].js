import moment from 'moment/moment';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { listRelated, singleBlog} from '../../actions/blog'
import SmallCard from '../../components/blog/SmallCard';
import Layout from '../../components/Layout';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import DisqusThread from '../../components/DisqusThread';

const SingleBlog = ({blog, query}) => {
    const [related, setRelated] = useState([]);

    const loadRelated = () => {
        listRelated({blog}).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setRelated(data)
            }
        })
    }

    useEffect(() => {
        loadRelated()
    }, [])

    const head = () => (
        <Head>
            <title>
                {blog.title} | {APP_NAME}
            </title>
            <meta name="description" content={blog.mdesc} />
            <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:title" content={`${blog.title}| ${APP_NAME}`} />
            <meta property="og:description" content={blog.mdesc} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:secure_url" ccontent={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

    const showBlogCategories = (blog) => {
        return blog.categories.map((c, i) => (
            <Link href={`/categories/${c.slug}`} 
                key={i}
                className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</Link>
        ))
    }

    const showBlogTags = (blog) => {
        return blog.tags.map((t, i) => (
            <Link href={`/tags/${t.slug}`} key={i} className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</Link>
        ))
    }

    const showRelatedBlog = () => {
        return related.map((blog, i) => (
            <div className='col-md-4' key={i}>
                <article>
                    <SmallCard blog={blog}/>
                </article>
            </div>
        ))
    }

    const showComments = () => {
        return (
            <div>
                <DisqusThread id={blog._id} title={blog.title} path={`/blog/${blog.slug}`}/>
            </div>
        )
    }

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <article>
                        <div className='container-fluid'>
                            <section>
                                <div className='row' style={{'marginTop': '-30px'}}>
                                    <img 
                                        src={`${API}/blog/photo/${blog.slug}`}
                                        alt={blog.title}
                                        className="img img-fluid featured-image"/>
                                </div>
                            </section>

                            <section>
                                <div className='container'>
                                    <h4 className='display-2 pb-3 pt-3 text-center font-weight-bold'>
                                        {blog.title}
                                    </h4>
                                    <p className='lead mt-3 mark'>
                                        Written by {' '}
                                        <Link href={`profile/${blog.postedBy.username}`}>
                                            {blog.postedBy.name}
                                        </Link>{' '}
                                        | Published {moment(blog.updatedAt).fromNow()}
                                    </p>

                                    <div className="pb-3">
                                        {showBlogCategories(blog)}
                                        {showBlogTags(blog)}
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </section>
                        </div>
                        
                        <div className='container'>
                            <section>
                                <div className='col-md-12 lead' dangerouslySetInnerHTML={{ __html: blog.body }}></div>
                            </section>
                        </div>

                        <div className='container'>
                            <h4 className='text-center pt-5 pb-5 h2'>Related blogs</h4>
                            <div className='row'>{showRelatedBlog()}</div>
                        </div>

                        <div className='container pt-5 pb-5'>{showComments()}</div>
                    </article>
                </main>
            </Layout>
        </React.Fragment>
    )

}

SingleBlog.getInitialProps = ({query}) => {
    return singleBlog(query.slug).then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            return {blog: data, query}
        }
    })
}

export default SingleBlog;