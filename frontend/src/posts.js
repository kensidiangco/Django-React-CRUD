import React from 'react';
import './posts.css';

export default function posts({id, title, text, postDelete, postUpdate}) {

	return (
		<div className="posts">
			<div key={id} className="post__card">
				<div className="post__button">
			        <button className="deleteButton" onClick={postDelete}>Delete</button>
			        <button className="editButton" onClick={postUpdate}>Edit</button>
	      		</div>
        		<div className="card__header">
					<label for="title"><small>Title:</small></label>
					<h3 name="title">{title}</h3>
        		</div>
        		<div className="card__body">
        			<label for="text"><small>Text:</small></label>
          			<p name="text">{text}</p>
        		</div>
      		</div>
		</div>
	)
}