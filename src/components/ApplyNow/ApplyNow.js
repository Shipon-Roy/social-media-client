import React from 'react';
import { useForm } from 'react-hook-form';

const ApplyNow = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='my-5'>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <label>Name *</label>
                <input className='w-75' {...register("example")} placeholder="Name" />
                <label>Email *</label>
                <input className='w-75' {...register("exampleRequired", { required: true })} placeholder="Email" />
                <label>Workplace type *</label>
                <select {...register("workplace-type")}>
                    <option value="on-site">On-Site</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="remote">Remote</option>
                </select>
                <label>Phone *</label>
                <input className='w-75' {...register("exampleRequired", { required: true })} placeholder="Phone" />
                <label>Employment type *</label>
                <select {...register("employment-type")}>
                    <option value="full-time">Full-Time</option>
                    <option value="part-time">Part-Time</option>
                    <option value="internship">Internship</option>
                </select>
                {errors.exampleRequired && <span>This field is required</span>}
                <input className='btn btn-info w-75' type="submit" />
            </form>
        </div>
    );
};

export default ApplyNow;