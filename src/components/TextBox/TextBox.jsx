import React from 'react';

const TextBox = () => {
  return (
    <div className="textbox-container">
      <div className="textbox">
        <p>
          This site is dedicated to random generators. Name generators can be
          very useful for creative writers in coming up with names of
          characters, cities, and other facets of story-writing.
        </p><br />
        <p>
          While this site is currently under construction, you can use a
          template name constructor provided on the "Home" page. The template
          uses a custom built algorithm that has pre-analyzed a set of words
          and has determined the frequency each letter is used. More sets will
          be provided in the future.
        </p><br />
        <p>
          Future implementations will include the use of machine learning and
          various algorithms in name generation. In the long term, other areas
          where random generation can be used, such as flag generation, will be
          considered to be added to the website.
        </p>
      </div>
    </div>
  );
};

export default TextBox;