import React from "react";

export default function GridFramework() {
  return (
    <div>
      <div class="columns is-mobile">
        <p>First Column</p>
        <div class="column is-mobile">
          <p>Time</p>
        <div class="column is-mobile">
            <p>8.10</p>
        </div>
        </div>
      </div>
      <div class="columns is-mobile">
        <p>Second Column</p>
        <div class="column is-mobile">
          <p>Tech 1</p>
        </div>
      </div>
    </div>
  );
}
