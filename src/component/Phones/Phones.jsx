import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Phones = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        /* 
        fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(res => res.json()
            .then(data => setPhones(data.data)));       
        */

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(phonesWithFakeData);
            })
    }, []);



    return (
        <div className="mt-10">
            <h2 className="text-3xl font-bold mb-10">Phones: {phones.length}</h2>

            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;