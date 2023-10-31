import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Service = () => {
    const [services, setServices] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        // fetch('http://localhost:5000/services')
        // .then(res => res.json())
        // .then(data => {
        //     setServices(data)
        // })
        axiosSecure.get('/services')
        .then(res => {
            setServices(res.data);
        })
    }, [])
    return (
        <div>
            <div className="text-center mt-6 space-y-4">
            <h2 className="text-xl font-bold text-orange-500">Service</h2>
            <h2 className="text-4xl font-bold">Our Service Area</h2>
            <p className="text-xl">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
        </div>
        <div className="grid md:grid-cols-3 py-12 gap-8">
          {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
          }
        </div>
        </div>
    );
};

export default Service;