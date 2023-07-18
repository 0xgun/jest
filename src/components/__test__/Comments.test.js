import { render, waitFor, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Comments from "../Comments";
import axios from "axios";
jest.mock("axios");
const dummyComments = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
];

describe("Comments component", () => {
  test("should get all comments", async () => {
    axios.get.mockResolvedValue({
      //  .mockResolvedValue
      data: dummyComments,
    });
    render(<Comments />);
    const comments = await waitFor(() => screen.findAllByTestId("comments"));
    expect(comments).toHaveLength(2);
  });
});

describe("Comments Snapshot", () => {
  it("should matches DOM shapshot", () => {
    const tree = renderer.create(<Comments />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
