import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Filter.css'
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Filter = () => {
    return (
        <div>
            <h3>Subcategories</h3>
            <p>return to
                <a href="#"> clothing, shoes, accesories</a>
            </p>
            <ul>
                <li><a href="/Dresses">Dresses</a></li>
                <li><a href="/Tops">Tops, Tees & Blouses</a></li>
                <li><a href="/Sweaters">Sweaters</a></li>
                <li><a href="/Hoodies">Fashion Hoodies & Sweatshirts</a></li>
                <li><a href="/Jean">Jeans</a></li>
            </ul>
            <div className="main-filter">
                <h2>Filters</h2>
                <form noValidate autoComplete="off">
                    <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        size="small"
                        style={{width: "300px"}}
                    />
                    <Button type="submit">
                        <SearchIcon />
                    </Button>
                </form>
                {/*<FormControl component="fieldset" className="">
                <FormLabel className="formLabel" component="legend">Condition</FormLabel>
                <FormGroup className="formGroup">
                    <FormControlLabel
                        control={<Checkbox/>}
                        label="NEW"
                    />
                    <FormControlLabel
                        control={<Checkbox/>}
                        label="USED"
                    />
                    <FormControlLabel
                        control={<Checkbox/>}
                        label="COLLECTIABLE"
                    />
                    <FormControlLabel
                        control={<Checkbox/>}
                        label="RENEWED"
                    />
                </FormGroup>
            </FormControl>*/}
                <h4>Condition</h4>
                <ul>
                    <li><Checkbox/>new</li>
                    <li><Checkbox/>used</li>
                    <li><Checkbox/>collectible</li>
                    <li><Checkbox/>renewed</li>
                </ul>
                <div className="review-cont">
                    <h4>Avg. Customer Review</h4>
                    <ul>
                        <li>
                            <a href="#">
                                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/><StarBorderIcon/>
                            </a>
                        </li><li>
                        <a href="#">
                            <StarIcon/><StarIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/>
                        </a>
                    </li><li>
                        <a href="#">
                            <StarIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/>
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="price-filter">
                    <h4>Price</h4>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Filter;