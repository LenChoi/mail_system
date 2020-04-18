import React, { Component } from "react";
import Layout from "../components/Layout";
import {
  Table,
  Icon,
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Input
} from "semantic-ui-react";

class MailInform extends Component {
  render() {
    return (
      <Layout>
        <Table basic style={{ width: "500px" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={4}>보내는 분</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell textAlign="center">이름</Table.Cell>
              <Table.Cell>this.props.??에 중괄호쳐서 값넣기</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">연락처</Table.Cell>
              <Table.Cell>this.props.??에 중괄호쳐서 값넣기</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">이메일</Table.Cell>
              <Table.Cell>this.props.??에 중괄호쳐서 값넣기</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="top">
              <Table.Cell textAlign="center">주소</Table.Cell>
              <Table.Cell verticalAlign="top">
                this.props.??에 중괄호쳐서 값넣기
                <br />
                this.props.??에 중괄호쳐서 값넣기
                <br />
                this.props.??에 중괄호쳐서 값넣기
              </Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">받는 분</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell textAlign="center">이름</Table.Cell>
              <Table.Cell>this.props.??에 중괄호쳐서 값넣기</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">연락처</Table.Cell>
              <Table.Cell>this.props.??에 중괄호쳐서 값넣기</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="top">
              <Table.Cell textAlign="center">주소</Table.Cell>
              <Table.Cell verticalAlign="top">
                this.props.??에 중괄호쳐서 값넣기
                <br />
                this.props.??에 중괄호쳐서 값넣기
                <br />
                this.props.??에 중괄호쳐서 값넣기
              </Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">상품 정보</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell textAlign="center">상품명</Table.Cell>
              <Table.Cell>this.props.??에 중괄호쳐서 값넣기</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">포장수량</Table.Cell>
              <Table.Cell>this.props.??에 중괄호쳐서 값넣기</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">부피</Table.Cell>
              <Table.Cell>this.props.??에 중괄호쳐서 값넣기</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="top">
              <Table.Cell textAlign="center">특이사항</Table.Cell>
              <Table.Cell>this.props.??에 중괄호쳐서 값넣기</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Layout>
    );
  }
}

export default MailInform;
