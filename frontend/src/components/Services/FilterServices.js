import React from 'react'

const FilterServices = () => {
  return (
    <div>
      <div class="col-lg-12">
                                        <div class="mb-3">
                                            <h4 class="mb-2">Position</h4>
                                            <input type="range" class="form-range w-100" id="rangeInput" name="rangeInput" min="0" max="500" value="0" oninput="amount.value=rangeInput.value"/>
                                            <output id="amount" name="amount" min-velue="0" max-value="500" for="rangeInput">335</output>
                                        </div>
                                    </div>
    </div>
  )
}

export default FilterServices
