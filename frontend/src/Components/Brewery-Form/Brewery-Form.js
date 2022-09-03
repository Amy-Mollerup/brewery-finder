import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Brewer_Dashboard() {
    return (
        <>
            <Header />
            <form>
                <h1>Brewery Information</h1>
                <label for='company'>Company Name</label>
                <input type='text' id='company' name='company' /><br />
                <label for='address'>Address</label>
                <input type='text' id='address' name='address' /><br />
                <label for='phone'>Business Phone</label>
                <input type='tel' id='phone' name='phone' /><br />
                <label for='description'>Company Description</label>
                <input type='text' id='description' name='description' /><br />
                <label for='description'>Company Description</label>
                <input type='text' id='description' name='description' /><br />
                <label for='operational'>Is the company in operation?</label>
                <input type="radio" id="active" name="operational" value="Active" />
                <label for="active">Active</label>
                <input type="radio" id="inactive" name="operational" value="Inactive" />
                <label for="inactive">Inactive</label><br></br>

                {/* TODO add hours of operation and image upload box, as well as preview(?) and submit buttons */}
            </form>
            <Footer />
        </>
    )
}