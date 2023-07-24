import './App.css';
import { Search, Star, StarFill, HandThumbsUpFill } from 'react-bootstrap-icons';
function App() {
  return (
    <main className="container">
      <div className="row g-5 mt-1">
        <div className="col-md-3">
          <div className="position-sticky" style={{ top: "1rem" }}>
            <div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                <button className="btn btn-primary" type="button" id="button-addon2"><Search viewBox="0 0 16 18" /></button>
              </div>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Sort
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Sort
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Date range
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Date range
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    APP version
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    APP version

                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Rating
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Rating
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Review type
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">Review type
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Device
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">Device
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    Likes
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Likes
                  </div>
                </div>
              </div>
              <button class="btn btn-primary w-100 mt-1">Apply</button>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div class="card mb-2">
            <div class="card-body">
              <div class="row">
                <div class="d-flex flex-row justify-content-between">
                  <span>
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <Star />
                  </span>
                  <span className='me-auto ps-2'>
                    <small>
                      <strong> John Smith </strong> May 23, 2023 9:59 am
                      <span class="border mx-1 p-1 rounded-2">Original text</span>
                    </small>
                  </span>
                  <span class="text-primary">
                    Feature Request
                  </span>
                </div>
                <span class="text-primary">
                  <hr />
                </span>
                <div class="col-sm-9">
                  <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                <div class="col-sm-3">
                  <strong>
                    <ul className='list-unstyled fw-medium'>
                      <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> 321 <HandThumbsUpFill /></li>
                      <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> 1.2.1 build 9611</li>
                      <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> Samsung Galaxy Tab</li>
                      <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> Andriod 11</li>
                      <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> Tablet</li>
                    </ul>
                  </strong>
                </div></div>
            </div></div>
          <div class="card mb-2">
            <div class="card-body">
              <div class="row">
                <div class="d-flex flex-row justify-content-between">
                  <span>
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <Star />
                  </span>
                  <span className='me-auto ps-2'>
                    <small><strong> John Smith </strong> May 23, 2023 9:59 am </small>
                  </span>
                  <span class="text-danger">
                    Bug
                  </span>
                </div>
                <span class="text-danger">
                  <hr />
                </span>
                <div class="col-sm-9">
                  <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                <div class="col-sm-3">
                  <strong>
                    <ul className='list-unstyled fw-medium'>
                      <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> 321 <HandThumbsUpFill /></li>
                      <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> 1.2.1 build 9611</li>
                      <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> Samsung Galaxy Tab</li>
                      <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> Andriod 11</li>
                      <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> Tablet</li>
                    </ul>
                  </strong>
                </div></div>
            </div></div>
          <div class="card mb-2">
            <div class="card-body">
              <div class="row">
                <div class="d-flex flex-row justify-content-between">
                  <span>
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <Star />
                  </span>
                  <span className='me-auto ps-2'>
                    <small><strong> John Smith </strong> May 23, 2023 9:59 am</small>
                  </span>
                  <span class="text-success chip">
                    Appreciation
                  </span>
                </div>
                <span class="text-success">
                  <hr />
                </span>
                <div class="col-sm-9">
                  <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                <div class="col-sm-3">
                  <ul className='list-unstyled fw-medium'>
                    <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> 321 <HandThumbsUpFill /></li>
                    <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> 1.2.1 build 9611</li>
                    <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> Samsung Galaxy Tab</li>
                    <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> Andriod 11</li>
                    <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> Tablet</li>
                  </ul>
                </div></div>
            </div>
          </div>
          <div class="card mb-2">
            <div class="card-body">
              <div class="row">
                <div class="d-flex flex-row justify-content-between">
                  <span>
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <Star />
                  </span>
                  <span className='me-auto ps-2'>
                    <small>
                      <strong> John Smith </strong> May 23, 2023 9:59 am
                      <span class="border mx-1 p-1 rounded-2">Original text</span>
                    </small>
                  </span>
                  <span class="text-warning">
                    Change Request
                  </span>
                </div>
                <span class="text-warning">
                  <hr />
                </span>
                <div class="col-sm-9">
                  <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                <div class="col-sm-3">
                  <strong>
                    <ul className='list-unstyled fw-medium'>
                      <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> 321 <HandThumbsUpFill /></li>
                      <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> 1.2.1 build 9611</li>
                      <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> Samsung Galaxy Tab</li>
                      <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> Andriod 11</li>
                      <li><span class="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span> Tablet</li>
                    </ul>
                  </strong>
                </div></div>
            </div></div>
        </div>
      </div>
    </main>
  );
}

export default App;
