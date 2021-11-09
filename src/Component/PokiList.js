import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PokiDetail from './PokiDetail';

export default function PokiList(){

    const [pokiData, setPokiData] = useState([])




    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/').then(res=>{
            console.log(res)
            setPokiData(res.data.results)
        }).catch(err=>{
            console.log(err)
        })
    }, [])


    return <>
    {pokiData.length>0 && pokiData.map((value, index)=>{
        return <Card style={{width:400, marginBottom:15,  margin:'auto'}} key={index}>
    <CardContent style={{fontWeight:'bold'}}><PokiDetail name={value.name} url={value.url}/></CardContent>
      </Card>

    })}
    </>
}