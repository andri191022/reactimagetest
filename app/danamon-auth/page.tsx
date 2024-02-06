import { Table, TableBody, TableColumn, TableHeader } from '@nextui-org/react'
import React from 'react'

export default function PageAuth() {
  return (
    <Table aria-label="Example empty table">
    <TableHeader>
      <TableColumn>NAME</TableColumn>
      <TableColumn>ROLE</TableColumn>
      <TableColumn>STATUS</TableColumn>
    </TableHeader>
    <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
  </Table>
  )
}
