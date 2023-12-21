import React from 'react';
import './ContentsSkills.css';

export default function ContentsSkills({ contents, style }) {
  return (
    <table className="skill" style={style ?? {}}>
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
