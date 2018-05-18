# Product Management Console


</h1>Build a small product catalog web app.</h1>


It should have the following screens:


<ul>
<li>Product Create/Edit</li>

<li>Product List</li>
 

<h3>Requirements:</h3>


A Product has the following attributes:

<ul>
<li>Name (required)</li>

<li>SKU (alphanumeric, required)</li>

<li>Description (optional)</li>

<li>Brand (optional)</li>

<li>Image URL (optional)</li>
</ul>

<BR/>
<b>Product Create/Edit Screen</b>

<ul> 
<li>Contains a form for adding new products or updating existing products.</li>

<li>Form has validation for required fields.</li>

<li>Upon submit, navigates to the Product List Screen.</li>
</ul>

<BR/>

<b>Product List Screen</b>

<ul>
<li> Lists known Product with columns Name/SKU/Description/Brand </li>

<li> Description is truncated if longer than 40 characters</li>

<li>Supports the following navigation & actions:</li>
<ul>
  <li> When selected by clicking, reveals a summary of the Product (including its image) in an adjacent pane to the right of the Product list</li>

  <li> Add New Product (links to Product Create/Edit Screen)</li>
</ul>
</ul>
<BR/>
<b>Product Operations supported </b>

<ul>
    <li>Shows Product fields (read-only)</li>
    <li>Supports the following navigation and actions:</li>

  <ul>
  <li>Link to Product List</li>

  <li>Delete this Product</li>

  <li>Edit this Product  </li>
  </ul>
</ul>

# How to build the application 

<B>Run the following command</b>

<i>ng serve </i>
