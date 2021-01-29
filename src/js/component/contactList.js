import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPencilAlt, faPhone, faEnvelope, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "../../styles/contactList.scss";

export const ContactList = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<ul className="list-group container">
			{store.contacts.map((contact, index) => {
				return (
					<li className="list-group-item" key={index}>
						<div className="row">
							<div className="col-3">
								<img
									src="https://randomuser.me/api/portraits/lego/8.jpg"
									className="rounded-circle img"
									alt="contact-avatar"
								/>
							</div>
							<div className="col-6">
								<h5 className="name">{contact.full_name}</h5>
								<ul className="info">
									<li>
										<div className="row">
											<div className="col-1">
												<FontAwesomeIcon icon={faMapMarkerAlt} />
											</div>
											<div className="col-10">{contact.address}</div>
										</div>
									</li>

									<li>
										<div className="row">
											<div className="col-1">
												<FontAwesomeIcon icon={faPhone} />
											</div>
											<div className="col-10">{contact.phone}</div>
										</div>
									</li>
									<li>
										<div className="row">
											<div className="col-1">
												<FontAwesomeIcon icon={faEnvelope} />
											</div>
											<div className="col-10">{contact.email}</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="col-2">
								<div className="row icons-right">
									<div className="col-6">
										<FontAwesomeIcon icon={faPencilAlt} />
									</div>
									<div className="col-6">
										<FontAwesomeIcon icon={faTrashAlt} />
									</div>
								</div>
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
};
ContactList.propTypes = {
	match: PropTypes.object
};
