import * as React from 'react';
import queryString from 'query-string';

const About = ({location, match}: any) => {
    const query = queryString.parse(location.search);
    const detail = query.detail === 'true';

    return (
        <div>
            <h1>About {match.params.name}</h1>
            {detail && 'detail: blahblah'}
        </div>
    )
}

export default About;