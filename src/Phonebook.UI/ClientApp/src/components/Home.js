import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { contacts: [], loading: true };
    }

    componentDidMount() {
        this.populatePhonebookData();
    }

    static renderContactsTable(contacts) {
        return (

            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact =>
                        <tr key={contact.phone_number}>
                            <td>{contact.name}</td>
                            <td>{contact.phone_number}</td>
                            <td>{contact.address}</td>
                        </tr>
                    )}
                </tbody>
            </table>

        );
    }

    render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderContactsTable(this.state.contacts);

        return (
            <div>

                <h1 id="tabelLabel" >Contacts</h1>
                {contents}
            </div>
        );
    }

    async populatePhonebookData() {
        const response = await fetch('http://www.mocky.io/v2/581335f71000004204abaf83');
        const data = await response.json();
        this.setState({ contacts: data.contacts, loading: false });
    }
}
