import React, { Component } from 'react';
import Paper from '../../library/Paper';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Moment from 'moment';

export class Portal extends Component {
  state ={
    news: [],
  }
  componentDidMount = () => {
    axios.get('http://localhost:3000/API/RSS/infobae').then(resultData => {
      console.log(resultData);
      this.setState({ news: resultData.data.items, });
    }); 
  }

  buildNews = newsData => {
    return <Paper>
     <Typography variant="subheading" component="h5">
        {Moment(newsData.pubDate).format('ddd, MMM D YYYY')}
     </Typography>       
    <Typography variant="headline" component="h3">
        <a href={newsData.link}>
              <div className="news" dangerouslySetInnerHTML={{__html:newsData.title}}></div>
        </a>
     </Typography>       
     <Typography component="div">
     <div className="news" dangerouslySetInnerHTML={{__html:newsData['contentSnippet']}}></div>
     </Typography>       
   </Paper>;
  }
  render() {
    const { news } = this.state;
    return (
      <div>
        {news && news.map(item => this.buildNews(item))}        
      </div>
    )
  }
}

export default Portal
