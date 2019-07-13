import React from 'react'

export default function FAQ({ faq }) {
    return (
        <div>
                {
                    faq.map( question => 
<div class="row accordion-gradient-bcg d-flex justify-content-center">

  <div class="col-md-10 col-xl-6 py-5">

    <div class="accordion md-accordion accordion-2" id="accordionEx7" role="tablist"
      aria-multiselectable="true">

      <div class="card">

        <div class="card-header rgba-stylish-strong z-depth-1 mb-1" role="tab" id="heading1">
          <a data-toggle="collapse" data-parent="#accordionEx7" href="#collapse1" aria-expanded="true"
            aria-controls="collapse1">
            <h5 class="mb-0 white-text text-uppercase font-thin">
              {question.header}<i class="fas fa-angle-down rotate-icon"></i>
            </h5>
          </a>
        </div>

        <div id="collapse1" class="collapse show" role="tabpanel" aria-labelledby="heading1"
          data-parent="#accordionEx7">
          <div class="card-body mb-1 rgba-grey-light white-text">
            <p>{ question.content }</p>
          </div>
        </div>
      </div>

     
    </div>
    </div>
    </div>)
                }
        </div>
    )
}
