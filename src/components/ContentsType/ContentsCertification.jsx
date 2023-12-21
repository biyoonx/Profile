import React from 'react';
import './ContentsCertification.css';

export default function ContentsCertification({ contents }) {
  return (
    <table className="certi">
      <tbody>
        {contents.map((item, index) => {
          const idx = item.indexOf(' ');

          return (
            <tr key={index}>
              <td>{item.slice(0, idx)}</td>
              <td>{item.slice(idx + 1)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
