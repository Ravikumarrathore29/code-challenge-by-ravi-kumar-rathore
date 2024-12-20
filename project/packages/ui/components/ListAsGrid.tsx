import React, { FC, useState, useEffect } from 'react';
import { convertToCapital } from '../utils/firstAlpabetCapital';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import './listAsGrid.css'
import { IResultsEntity, IResultListAsGrid } from './List.type';

import { Card, CardContent, CardActions } from '@mui/material';
import { Icon } from '@mui/material';
import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined';


const ListAsGrid: FC<IResultListAsGrid> = (props) => {
    const { results, handleRemovePokemon } = props;
    const [data, setData] = useState(results.slice(0, 20));
    const [hasMore, setHasMore] = useState(results.length > 20);

    useEffect(() => {
        let doc = document.getElementById('load-more') as HTMLElement
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setData((prevData: IResultsEntity[]) => prevData.concat(results.slice(prevData.length, prevData.length + 10)));
                let isData = (results.length > data.length + 10);

                setHasMore(isData);
            }
        }, { threshold: 1.0 });
        observer.observe(doc);

        return () => observer.unobserve(doc);
    }, [hasMore]);

    return (
        < div className="cards" >
            {data.map((item: IResultsEntity, index: number) => (
                // <div className="card" key={index} >  {convertToCapital(item.name)} </div>

                <div className="card" key={index} >
                    <Card sx={{ padding: '0.5rem', height: '4rem', background: 'dodgerblue', color: 'white', borderRadius: '5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <CardContent sx={{ padding: 0 }}>
                            {convertToCapital(item.name)}
                        </CardContent>
                        <CardActions sx={{ padding: 0, justifyContent: 'flex-end' }} onClick={()=>handleRemovePokemon(item.name)}>
                            <Icon sx={{ color: 'white' }} >
                                <DeleteOutlineOutlined />
                            </Icon>
                        </CardActions>
                    </Card>
                </div>
            ))}
            {hasMore &&
                <div id="load-more" style={{ height: '50px' }}>

                    <Stack spacing={1}>
                        <Skeleton variant="rounded" width={210} height={'4rem'} />
                    </Stack>

                </div>

            }
        </div>
    );
};

export default ListAsGrid;

