import React, { useState } from "react";

import { CardActionArea, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

import Bookcard from "./card";

import './Books.css'
import book from '../service/books'

function Books() {
    const [books,setBooks]=useState([...book]);
    const [filteredBooks, setFilteredBooks] = useState([...book]); 

    function filterbook(e) {
        const searchTerm = e.target.value.toLowerCase(); 
        const filtered = books.filter((book) =>
            book.volumeInfo.title.toLowerCase().includes(searchTerm) // Filter books based on title
        );
        setBooks(filtered); 
        console.log(books);
        if(searchTerm.length === 0){
            setBooks([...book]);
        }
    }
    // function filterbook(e){
    //     let book=books.filter((book)=>{
    //         if(e.target.value=== book.volumeInfo.title){
    //             return book;
    //         }
    //     })
    //     console.log(book)
    // }

    return (
        <div className="bookParent">
            <div className="search">
            <TextField id="outlined-basic" label="Search" variant="outlined"  onChange={filterbook} />
            </div>
            
            <Grid spacing={5} container
                direction="row"
                justifyContent="center"
                alignItems="center">
                {books.map((book,index) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={index} style={{cursor:"none"}}>
                            <Bookcard title={book.volumeInfo.title} detail={book.searchInfo.textSnippet} image={book.volumeInfo.imageLinks.smallThumbnail} />
                        </Grid>
                    );
                })}

                {/* <Grid item xs={12} sm={6} md={4} >
                    <Bookcard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Bookcard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Bookcard />
                </Grid> */}
            </Grid>
        </div>
    );
}

export default Books;