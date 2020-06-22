import React from "react";
import styles from "./UserListHead.module.scss";

const UserListHead = ({ printTable }) => (
  <thead>
    <tr>
      <th>
        <abbr title="Position">Lp.</abbr>
      </th>
      <th>Imię</th>
      <th>Nazwisko</th>
      <th>
        <abbr title="Klasa">Kl.</abbr>
      </th>
      <th>
        <abbr title="Ilość Obiadów">Il. ob.</abbr>
      </th>
      <th>
        <abbr title="Cena obiadów">C. ob.</abbr>
      </th>
      <th>
        <abbr title="Wartość obiadów">W. ob.</abbr>
      </th>
      <th>
        <abbr title="Ilość herbat">Il. her.</abbr>
      </th>
      <th>
        <abbr title="Cena herbat">C. her.</abbr>
      </th>
      <th>
        <abbr title="Wartość herbat">W. her.</abbr>
      </th>
      <th>Suma</th>
      <th>
        {printTable ? (
          <abbr className={styles.signatureCell}>Podpis</abbr>
        ) : (
          "Suma"
        )}
      </th>
    </tr>
  </thead>
);

export default UserListHead;
