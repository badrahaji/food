import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Style/menu.css";
function SingleitemCard({title,prix,imgurl,description}) {
  return (
    <div className='signleitemcard'> 
            <div className='singlecardtext'> 

    <Card>  
      <Card.Body>
        <Card.Title><h2>{title}</h2></Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          {prix}
        </Card.Text>
        <Button variant="primary">Acheté</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='singlecardimg'>
            <img src={imgurl} alt='jjk'/>
        </div>
    </div>
  );
}

export default SingleitemCard;