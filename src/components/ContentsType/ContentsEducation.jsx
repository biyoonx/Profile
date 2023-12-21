import React from 'react';
import './ContentsEducation.css';

export default function ContentsEducation({ contents }) {
  return (
    <table className="edu">
      <tbody>
        {contents.map((item, index) => {
          const idx = item.indexOf(' ');

          return (
            <tr key={index}>
              <th>{item.slice(0, idx)}</th>
              <td>{item.slice(idx + 1)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
