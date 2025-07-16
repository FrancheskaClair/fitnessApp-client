import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../index.css';

import heroImg from '../images/hero.png';

import { CircleArrowRight } from 'lucide-react';

export default function Landing (){

	return (
		<>
		<Row className="mt-5 pt-4">
		<Col className="my-5" id="hero-txt">
		<h1>Your path to wellness, perfectly in sync.</h1>
		<p>Track your fitness, sleep, nutrition, and mindfulness in one intuitive platform—designed to keep your body and mind moving in harmony.</p>
		<div className="d-flex d-grid gap-2">
		<Link className="btn" id="sign-btn" to="/register">Sign Up</Link>
        <Link className="btn" id="contact-btn" to="/aboutUs">Contact Us <CircleArrowRight size={20} strokeWidth={0.75} /></Link>
        </div>
		</Col>

		<Col>
		 <img src={heroImg} alt="Description" />
		</Col>

		</Row>

		    <section className="about-section">
		      <div className="container">

		        <div className="hero-section text-center mb-5">
		        </div>

		        <div className="row g-4 mb-5">
		          <div className="col-md-6">
		            <div className="highlight-card h-100">
		              <h3 className="highlight-title">Our Mission</h3>
		              <p className="highlight-text">
		                To empower individuals to take charge of their holistic health by providing a seamless platform
		                that syncs physical activity, nutrition, mindfulness, and rest — all in one place.
		              </p>
		            </div>
		          </div>
		          <div className="col-md-6">
		            <div className="highlight-card h-100">
		              <h3 className="highlight-title">Our Vision</h3>
		              <p className="highlight-text">
		                To redefine wellness tracking as a simple, intuitive experience that promotes balance,
		                longevity, and daily progress — without the overwhelm.
		              </p>
		            </div>
		          </div>
		        </div>

		<div className="values-section text-center">
		  <h3 className="about-heading mb-5">The WellSync Approach</h3>
		  <div className="container">
		    <div className="row g-4 justify-content-center">

		      
		      <div className="col-md-4">
		        <div className="value-card value-green">
		          <h5 className="value-title">Clarity Over Complexity</h5>
		          <p className="value-desc">
		            We turn wellness data into simple, actionable insights — no fluff, no overwhelm.
		          </p>
		        </div>
		      </div>

		      <div className="col-md-4">
		        <div className="value-card value-white">
		          <h5 className="value-title">Consistency Over Perfection</h5>
		          <p className="value-desc">
		            Progress happens when health fits your real life — not someone else's rules.
		          </p>
		        </div>
		      </div>


		      <div className="col-md-4">
		        <div className="value-card value-orange">
		          <h5 className="value-title">Empowerment Over Control</h5>
		          <p className="value-desc">
		            We give you tools to understand your body and make confident choices.
		          </p>
		        </div>
		      </div>

		    </div>
		  </div>
		</div>
		      </div>
		    </section>

    </>

		)
};