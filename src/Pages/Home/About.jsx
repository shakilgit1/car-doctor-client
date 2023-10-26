import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg:w-1/2 relative'>
          <img className='w-3/4 rounded-lg shadow-2xl' src={person} alt="" />
          <img className='w-1/2 absolute right-5 top-1/2 rounded-lg border-8 shadow-2xl border-white' src={parts} alt="" />
          </div>
          <div className='lg:w-1/2 space-y-4 p-4'>
            <h1 className="text-2xl font-bold text-orange-500">About Us</h1>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. </p>
            <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <button className="btn btn-error">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;