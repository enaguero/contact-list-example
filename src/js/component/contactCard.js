import React, { useState, useEffect } from "react";

export const ContactCard = (props) => {
	return (
		<a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
			<img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
			<div className="d-flex gap-2 w-100 justify-content-between">
				<div>
					<h6 className="mb-0">{props.fullName}</h6>
					<p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
				</div>
				<small className="opacity-50 text-nowrap">now</small>
			</div>
		</a>)
};
