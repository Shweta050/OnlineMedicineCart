import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../Styles/Wallpaper.css';

export default class Wallpaper extends Component {
    render() {
        return (
            <div className="topSection"> 
             
        <div class="row">
          <div class="col-10">
            <h1>Reliable on time</h1>
            <h1>home delivery</h1>
            <h5>Our in-house pharacist ensure your medicine</h5>
            <h5>reach you when you need them</h5>
            <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Medicines</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
                    </div>
                <div class="col-2">
                
      <img src={require('../Assets/deliveryman.jpg')} alt="deliveryman" className="deliverymanImage"/>
                    </div>

                </div>
             </div>
                    
        )
    }
}
