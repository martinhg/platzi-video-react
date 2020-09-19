import React, { useState, useEffect } from 'react';

import Search from '../components/Search/Search';
import Categories from '../components/Categories/Categories';
import Carousel from '../components/Carousel/Carousel';
import CarouselItem from '../components/CarouselItem/CarouselItem';

import useInitialState from '../hooks/useInitialState';

const api = 'http://localhost:3000/initalState';

const HomePage = () => {
    const videos = useInitialState(api);

    return (
        <div>
            <Search />

            {
                videos.mylist?.length > 0 &&
                <Categories title="My List">
                    <Carousel>
                        {
                            videos.mylist.map( item => 
                                <CarouselItem key={ item.id } { ...item } />
                            )
                        }
                    </Carousel>
                </Categories>
            }

            <Categories title="Trends">
                <Carousel>
                    {
                        videos.trends?.map( item =>
                            <CarouselItem key={ item.id } { ...item } />
                        )
                    }
                </Carousel>
            </Categories>

            <Categories title="Originals from PlatziVideo">
                <Carousel>
                    {
                        videos.originals?.map( item =>
                            <CarouselItem key={ item.id } { ...item } />
                        )
                    }
                </Carousel>
            </Categories>
        </div>
    );
};

export default HomePage;
