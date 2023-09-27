import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '@/lib/posts-util';

function HomePage(props) {
    return (
      <Fragment>
        <Head>
          <title>kwetso' Blog</title>
          <meta
            name='description'
            content='I post about programming and web development.'
          />
        </Head>
        <Hero />
        <FeaturedPosts posts={props.posts} />
      </Fragment>
    );
  }

export function getStaticProps()  {
   const FeaturedPosts = getFeaturedPosts();
   
   return {
    props: {
        posts: FeaturedPosts
    },
  
   }
}

export default HomePage;