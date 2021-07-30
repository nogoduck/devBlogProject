import React from 'react';
import {
  Container,
  TopSpace,
  TopNav,
  Main,
  SideNav,
  SideSpace,
  Content,
  Article,
  Footer,
  SideNavToggleButton,
  Test,
} from './styled';

function ExamplePage() {
  return (
    <>
      <div>
        <Test>메뉴 테스트</Test>
      </div>
      <Container>
        <SideSpace />
        <SideNavToggleButton type="checkbox" />
        <SideNav>SideNav</SideNav>
        <Main>
          <TopSpace />
          <TopNav>TopNav</TopNav>
          <Content>
            <Article>
              Article
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit
              eius incidunt consequatur excepturi harum dolore corporis alias,
              voluptate similique unde nulla! Neque, tenetur! Dolorum, pariatur
              voluptas magni deserunt reprehenderit nisi odio quis. Ipsum iusto
              iste, tenetur unde fugiat illo quam rem ad quaerat doloribus,
              aspernatur nemo dolor quisquam molestias nesciunt, sed autem
              officia libero nostrum saepe! Magni, nam. Ex cupiditate
              perspiciatis explicabo facere sapiente sit dolorum, consectetur
              voluptatum id fuga repellendus hic consequatur dicta quos iusto
              fugit, atque officiis totam est magni! Tempore minus qui quae id
              molestias facilis porro quasi, repellendus cumque consequatur modi
              quibusdam dignissimos accusantium non autem quos praesentium.
              Libero aut nam praesentium rerum, quos sequi totam, atque iure et,
              quae nobis odit. Dolorum aperiam quam nihil dolorem optio ab sint
              unde facere eligendi quis. Provident et dolorem explicabo corporis
              nobis corrupti animi? Explicabo libero laboriosam, quae temporibus
              fuga asperiores mollitia alias nostrum saepe nam enim numquam,
              itaque quos, exercitationem quasi deleniti eveniet impedit in
              dolorum? Mollitia soluta esse eveniet nisi, magnam dolores
              temporibus enim quae sapiente excepturi ad. Quasi, culpa ex?
              Ducimus dolorem culpa commodi eligendi inventore, sit rerum
              impedit at odit numquam dolores ipsa fuga officiis, ea iure non
              ullam quibusdam praesentium tempora accusantium!
              <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
                <li>item4</li>
                <li>item5</li>
                <li>item6</li>
                <li>item7</li>
                <li>item8</li>
                <li>item9</li>
                <li>item10</li>
                <li>item11</li>
                <li>item12</li>
                <li>item13</li>
                <li>item14</li>
                <li>item15</li>
                <li>item16</li>
                <li>item17</li>
                <li>item18</li>
                <li>item19</li>
                <li>item20</li>
                <li>item21</li>
                <li>item22</li>
                <li>item23</li>
                <li>item24</li>
                <li>item25</li>
                <li>item26</li>
                <li>item27</li>
                <li>item28</li>
                <li>item29</li>
                <li>item30</li>
                <li>item31</li>
                <li>item32</li>
              </ul>
            </Article>
            <Footer>Footer</Footer>
          </Content>
        </Main>
      </Container>
    </>
  );
}
export default ExamplePage;
