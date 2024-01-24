export default function Page() {
  return (
    <div className="prose dark:prose-invert font-serif">
      <h1 className="font-serif text-4xl">Investments</h1>
      <p className="text-lg">I&apos;ve been doing tiny investments in startups since 2021, primarily to just get my feet wet and to diversify my high-level personal finance holdings. Here are the investments I&apos;ve made.</p>

      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Year</th>
            <th>Amount</th>
            <th>About</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr>
            <td className="px-2 py-3"><a href="https://anydistance.club" className="thick-link">AnyDistance</a></td>
            <td>March 2022</td>
            <td>$10,000</td>
            <td>Interactive health company + community</td>
          </tr>
          <tr>
            <td className="px-2 py-3"><a href="https://www.xiggit.com" className="thick-link">Xiggit</a></td>
            <td>March 2022</td>
            <td>$1,000</td>
            <td>Benefits for hourly workers and freelancers</td>
          </tr>
          <tr>
            <td className="px-2 py-3"><a href="https://www.ooneepod.com" className="thick-link">Oonee</a></td>
            <td>March 2022</td>
            <td>$1,000</td>
            <td>Smart, modular, scalable bike parking</td>
          </tr>
          <tr>
            <td className="px-2 py-3"><a href="https://thimble.io" className="thick-link">Thimble</a></td>
            <td>March 2022</td>
            <td>$1,000</td>
            <td>Live STEM classes + robotics kits for schools</td>
          </tr>
          <tr>
            <td className="px-2 py-3"><a href="https://bowr.co" className="thick-link">Bowr</a></td>
            <td>March 2022</td>
            <td>$1,000</td>
            <td>Sustainable furniture design & production</td>
          </tr>
          <tr>
            <td className="px-2 py-3"><a href="https://kingscrowd.com" className="thick-link">KingsCrowd</a></td>
            <td>March 2022</td>
            <td>$1,000</td>
            <td>Financial data platform for online private markets</td>
          </tr>
          <tr>
            <td className="px-2 py-3"><a href="https://brikclik.com" className="thick-link">Brik + Clik</a></td>
            <td>March 2022</td>
            <td>$1,000</td>
            <td>End-to-end commerce solution for brands and retailers</td>
          </tr>
          <tr>
            <td className="px-2 py-3"><a href="https://curastory.co" className="thick-link">Curastory</a></td>
            <td>February 2022</td>
            <td>$1,000</td>
            <td>Creator platform for making, monetizing and distributing video content</td>
          </tr>
          <tr>
            <td className="px-2 py-3"><a href="https://nada.co/cityfunds/33100" className="thick-link">Miami Cityfund</a></td>
            <td>February 2022</td>
            <td>$1,000</td>
            <td>Real estate index fund of Miami</td>
          </tr>
          <tr>
            <td className="px-2 py-3"><a href="https://www.evolutiondevices.com" className="thick-link">Evolution Devices</a></td>
            <td>January 2022</td>
            <td>$1,000</td>
            <td>Digital physical therapy with smart therapeutic devices</td>
          </tr>
          <tr>
            <td className="px-2 py-3"><a href="https://customer.io" className="thick-link">Customer.io</a></td>
            <td>August 2021</td>
            <td>$2,500</td>
            <td>Business messaging automation platform</td>
          </tr>
          <tr>
            <td className="px-2 py-3"><a href="https://gumroad.com" className="thick-link">Gumroad</a></td>
            <td>April 2021</td>
            <td>$1,000</td>
            <td>Storefront for creators</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

