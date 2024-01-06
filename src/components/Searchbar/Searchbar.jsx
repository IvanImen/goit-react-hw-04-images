import { Component } from 'react';

import {
  BtnStyled,
  ContainerStyled,
  FormStyled,
  HeaderStyled,
  IconStyled,
  InputStyled,
} from './Searchbar.styled';
// import { FormBtn, InputSearch, SearchbarStyled } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <HeaderStyled>
        <ContainerStyled>
          <FormStyled onSubmit={this.handleSubmit}>
            <BtnStyled type="submit">
              <IconStyled size="24px" />
            </BtnStyled>
            <InputStyled
              type="text"
              name="search"
              onChange={this.handleChange}
              value={this.state.search}
              required
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </FormStyled>
        </ContainerStyled>
      </HeaderStyled>
    );
  }
}
