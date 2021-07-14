import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import './Filter.css'
import {Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Circles from "./Circles";

const Filter = (filter) => {

    const [moreSize, setMoreSize] = useState(false);
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    let toggleMoreSize = () => {
        setMoreSize(!moreSize);
    }

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
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="price" name="price1" value={value} onChange={handleChange}>
                            <FormControlLabel value=">25" control={<Radio color="primary"/>} label="Under $25" />
                            <FormControlLabel value="25<50" control={<Radio color="primary"/>} label="$25 to $50" />
                            <FormControlLabel value="50<100" control={<Radio color="primary"/>} label="$50 to $100" />
                            <FormControlLabel value="100<200" control={<Radio color="primary"/>} label="$100 to $200" />
                            <FormControlLabel value="200<" control={<Radio color="primary"/>} label="$200 & above" />
                        </RadioGroup>
                    </FormControl>
                    <div className="price-input">
                        <TextField id="outlined-basic" label="$ Min" variant="outlined" size="small" />
                        <p>-</p>
                        <TextField id="outlined-basic" label="$ Max" variant="outlined" size="small"/>
                    </div>
                    <div className="price-slider">
                        <h4>Price</h4>
                        <Grid container spacing={2}>
                            <Grid item>
                                <p>$0</p>
                            </Grid>
                            <Grid item xs>
                                <Slider aria-labelledby="continuous-slider" />
                            </Grid>
                            <Grid item>
                                <p>$100</p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="size-color-cont">
                    <div className="size-cont">
                        <ul>
                            <li><Checkbox />34</li>
                            <li><Checkbox />36</li>
                            <li><Checkbox />38</li>
                            <li><Checkbox />40</li>
                        </ul>
                    </div>
                    <div className="drop-down-size">
                        <button onClick={toggleMoreSize}>More</button>
                        <ul style={{display: moreSize ? "block" : "none"}}>
                            <li><Checkbox/>42</li>
                            <li><Checkbox/>44</li>
                            <li><Checkbox/>46</li>
                            <li><Checkbox/>50</li>
                        </ul>
                    </div>
                    <div className="color-filter">
                        <h4 style={{fontWeight: "bold"}}>Color</h4>
                        <Box display='flex' flexWrap='wrap' ml='-15px' maxWidth="300px">
                            <Circles bgcolor='#FFFFFF' />
                            <Circles bgcolor='#9E9E9E' />
                            <Circles bgcolor='#000000' />
                            <Circles bgcolor='#4CAF50' />
                            <Circles bgcolor='#2196F3' />
                            <Circles bgcolor='#9C27B0' />
                            <Circles bgcolor='#FFEB3B' />
                            <Circles bgcolor='#3F51B5' />
                            <Circles bgcolor='#F44336' />
                            <Circles bgcolor='#FF9800' />
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;