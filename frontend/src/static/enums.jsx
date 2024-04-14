import cardboard from "../assets/images/cardboard.png";
import recycleCardboard1 from "../assets/images/recycleCardboard1.png";
import recycleCardboard2 from "../assets/images/recycleCardboard2.png";
import plastic from "../assets/images/plastic.png";
import recyclePlastic1 from "../assets/images/recyclePlastic1.png";
import recyclePlastic2 from "../assets/images/recyclePlastic2.png";
import metal from "../assets/images/metal.png";
import recycleMetal1 from "../assets/images/recycleMetal1.png";
import recycleMetal2 from "../assets/images/recycleMetal2.png";
import recycleMetal3 from "../assets/images/recycleMetal3.png";
import trash from "../assets/images/trash.png";
import paper from "../assets/images/paper.png";
import recyclePaper1 from "../assets/images/recyclePaper1.png";
import glass from "../assets/images/glass.png";
import recycleGlass1 from "../assets/images/recycleGlass1.png";
import recycleGlass2 from "../assets/images/recycleGlass2.png";
import recycleGlass3 from "../assets/images/recycleGlass3.png";
import recycleGlass4 from "../assets/images/recycleGlass4.png";
import recycleGlass5 from "../assets/images/recycleGlass5.png";
import recycleBloobin from "../assets/images/recycleBloobin.png";

export const wastes = [
  {
    title: "Glass",
    fullTitle: "Glass Waste",
    image: glass,
    about: (
      <>
        Glass waste is a significant environmental concern due to its
        non-biodegradable nature. When disposed of improperly, glass contributes
        to pollution and poses risks to wildlife and ecosystems. Recycling glass
        is crucial to mitigate these impacts, as it reduces energy consumption
        and raw material extraction. Additionally, recycled glass can be used in
        various industries, promoting sustainability and resource conservation
        efforts worldwide.
        <br />
        <br />
        Glass waste encompasses various glass products, including bottles, jars,
        containers, and packaging materials, which are commonly used in
        households, businesses, and the food and beverage industry. Unlike many
        other materials, glass can be recycled indefinitely without losing
        quality or purity. By recycling glass, communities can reduce the demand
        for virgin materials, conserve natural resources like sand and
        limestone, and minimize energy consumption and greenhouse gas emissions
        associated with glass production. Additionally, incorporating recycled
        glass into manufacturing processes helps to close the loop on the
        production cycle, promoting a more sustainable and circular economy.
      </>
    ),
    recycle: (
      <>
        <span className="w-full grid grid-cols-2 gap-7">
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recycleGlass1} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">1.</span>
              <span className="font-semibold">
                Recycle glass bottles that are clear, brown, and green.
              </span>{" "}
              Glass bottles come in a variety of colors, from clear to brown to
              green. Clear bottles are used the most and are made of sand, soda
              ash, and limestone. Brown and green glass bottles are usually used
              for drinks like wine and beer. Clear, brown, and green glass
              bottles can all be recycled.
              <br />
              <br />
              Some community recycling programs will require you to sort glass
              bottles by color when you put them in a recycling bin. Check with
              your local recycling program for more information on their policy.
            </p>
          </span>
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recycleGlass2} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">2.</span>
              <span className="font-semibold">
                Check that the glass bottles held food or drink only.
              </span>{" "}
              Most glass bottles that were made to hold food can be recycled, as
              they are made of materials that can be used to make new glass
              bottles. Glass bottles used to hold drinks like beer and wine are
              usually recyclable as well.
              <br />
              <br />
              Glass bottles that are not designed to hold food or drink, such as
              glass vases, are not usually recyclable.
            </p>
          </span>
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recycleGlass3} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">3.</span>
              <span className="font-semibold">
                Do not recycle glass bottles that are heat-resistant or made of
                crystal or ceramic.
              </span>{" "}
              Glass that has been designed to be resistant to heat, such as
              Pyrex glass bowls or cups, are not recyclable. Crystal or ceremic
              materials do not break down easily and cannot be recycled.
            </p>
          </span>
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recycleGlass4} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">4.</span>
              <span className="font-semibold">
                Remove plastic or metal lids on the bottles.
              </span>{" "}
              Remove the lids and put them in a separate recycling bin.
            </p>
          </span>
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recycleGlass5} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">5.</span>
              <span className="font-semibold">
                Rinse out the bottles with water.
              </span>{" "}
              Give the glass bottles a light rinse to remove dirt and food
              residue. You may need to rinse them out a few times with warm
              water if food is really stuck in the bottles.
              <br />
              <br />
              Cleaning the bottles will make recycling them more efficient. In
              some communities, bottles cannot be recycled unless they are free
              of dirt and food.
            </p>
          </span>
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recycleBloobin} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">6.</span>
              <span className="font-semibold">
                Put the bottles in Bloobin.
              </span>{" "}
              Your neighborhood may have designated recycling bins next to
              public garbage bins. Look for a map of recycling bin locations in
              your area on your community’s website.
            </p>
          </span>
        </span>
        <br />
        The process of recycling glass begins with collection, where discarded
        glass items are gathered from households, businesses, and recycling
        centers. It's essential to sort glass items by color to ensure that they
        can be properly recycled, as different colors of glass require separate
        recycling processes.
        <br />
        <br />
        Once collected, the glass is transported to recycling facilities, where
        it undergoes sorting and cleaning. At these facilities, the glass is
        sorted by color and type, with clear, green, and brown glass being the
        most common categories. After sorting, the glass is cleaned to remove
        any contaminants such as labels, caps, and residual liquids. The cleaned
        glass is then crushed into small pieces called cullet, which are melted
        in furnaces at high temperatures. The molten glass is then molded into
        new glass products, such as bottles, jars, fiberglass, and construction
        materials. By investing in glass recycling infrastructure and promoting
        the use of recycled glass products, communities can reduce their
        environmental footprint, conserve natural resources, and support a more
        sustainable future.
      </>
    ),
  },
  {
    title: "Paper",
    fullTitle: "Paper Waste",
    image: paper,
    about: (
      <>
        Paper waste is a prevalent issue globally, with millions of tons
        discarded annually. Improper disposal leads to landfills overflowing and
        contributes to deforestation. Recycling paper is crucial, as it
        conserves natural resources, reduces energy consumption, and minimizes
        pollution. By utilizing recycled paper products and promoting
        sustainable practices, individuals and businesses can significantly
        reduce their environmental footprint and support a healthier planet.
        <br />
        <br />
        Paper waste encompasses various forms of paper products, including
        newspapers, magazines, cardboard, office paper, and packaging materials.
        These materials often end up in landfills when not disposed of properly,
        contributing to environmental degradation and resource depletion.
        However, paper waste also presents an opportunity for resource recovery
        and conservation through recycling. The recycling process involves
        collecting, sorting, and processing discarded paper materials to produce
        new paper products. This closed-loop system helps to reduce the demand
        for virgin materials, conserve natural resources like trees and water,
        and minimize the energy and emissions associated with paper production.
        Additionally, recycled paper products often require less energy and
        water to manufacture compared to their counterparts made from virgin
        materials, further contributing to environmental sustainability.
      </>
    ),
    recycle: (
      <>
        <span className="w-full grid grid-cols-2 gap-7">
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recyclePaper1} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">1.</span>
              <span className="font-semibold">
                Know what can and can’t be recycled.
              </span>{" "}
              What you can recycle: Newspaper, magazines, maps, packaging
              (except frozen food), envelopes, cardboard. What you can’t
              recycle: Waxed paper, laminated paper, pet food bags, food-soaked
              paper, frozen food boxes.
            </p>
          </span>
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recycleBloobin} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">2.</span>
              <span className="font-semibold">
                Put the papers in Bloobin.
              </span>{" "}
              Your neighborhood may have designated recycling bins next to
              public garbage bins. Look for a map of recycling bin locations in
              your area on your community’s website.
            </p>
          </span>
        </span>
        <br />
        Recycling paper is a crucial step towards mitigating the environmental
        impact of paper waste and promoting sustainable resource management. The
        process of recycling paper begins with collection, where discarded paper
        materials are gathered from households, businesses, and recycling
        centers. It's important to ensure that collected paper is free from
        contaminants such as food residue, plastics, and metals, as these can
        hinder the recycling process.
        <br />
        <br />
        Once collected, the paper is transported to recycling facilities, where
        it undergoes sorting and processing. At these facilities, the paper is
        sorted based on type and grade, with different types of paper requiring
        different recycling processes. The sorted paper is then cleaned,
        de-inked, and shredded into small fibers. These fibers are mixed with
        water to create a pulp, which is then refined and pressed into sheets to
        form new paper products. By investing in paper recycling infrastructure
        and promoting the use of recycled paper products, communities can reduce
        their reliance on virgin materials, conserve natural resources, and
        minimize the environmental impact of paper production and disposal.
      </>
    ),
  },
  {
    title: "Cardboard",
    fullTitle: "Cardboard Waste",
    image: cardboard,
    about: (
      <>
        Cardboard waste poses a significant environmental challenge due to its
        abundance and slow decomposition rate. Improper disposal fills landfills
        and contributes to pollution. Recycling cardboard is essential for
        conserving resources, reducing energy consumption, and minimizing
        environmental impact. By reusing and recycling cardboard packaging,
        businesses and individuals can help alleviate strain on ecosystems and
        promote a more sustainable future.
        <br />
        <br />
        Cardboard is composed of multiple layers of paperboard, typically
        sandwiched between two outer layers of kraft paper. When improperly
        disposed of in landfills, cardboard waste takes up valuable space and
        contributes to the generation of greenhouse gases, such as methane, as
        it decomposes anaerobically.
      </>
    ),
    recycle: (
      <>
        <span className="w-full grid grid-cols-2 gap-7">
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recycleCardboard1} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">1.</span>
              <span className="font-semibold">
                Don’t recycle boxes with food or soiled paper products inside.
              </span>{" "}
              Check your takeout and pizza boxes for any leftover food, soft or
              spoiled paper, wax paper, or plastic-coated paper products. Cut
              away any soiled pieces before collapsing and recycling your
              cardboard boxes. If the cardboard is greasy or heavily-soiled,
              throw it away with your regular trash.
            </p>
          </span>
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recycleCardboard2} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">2.</span>
              <span className="font-semibold">
                Remove all tape, then flatten and tie your cardboard into
                bundles.
              </span>{" "}
              Take off as much tape as possible from your cardboard boxes and
              packaging. Collapse and fold large boxes or sheets of corrugated
              cardboard, then tie them up with twine, not tape.
            </p>
          </span>
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recycleBloobin} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">3.</span>
              <span className="font-semibold">
                Put the papers in Bloobin.
              </span>{" "}
              Your neighborhood may have designated recycling bins next to
              public garbage bins. Look for a map of recycling bin locations in
              your area on your community’s website.
            </p>
          </span>
        </span>
        <br />
        The process of recycling cardboard typically begins with collection,
        where discarded cardboard materials are gathered from households,
        businesses, and recycling centers. It's crucial to ensure that the
        collected cardboard is free from contaminants such as food residue,
        tape, and plastic packaging to facilitate the recycling process.
        <br />
        <br />
        Once collected, the cardboard is transported to recycling facilities,
        where it undergoes sorting and processing. At these facilities, the
        cardboard is sorted based on grade and quality to ensure that only
        suitable materials are processed for recycling. The cardboard is then
        shredded into small pieces and mixed with water to create a pulp. This
        pulp is then cleaned, refined, and pressed into sheets, forming new
        cardboard materials. These recycled cardboard sheets can be used to
        manufacture a wide range of products, including packaging materials,
        boxes, and paperboard.
      </>
    ),
  },
  {
    title: "Plastic",
    fullTitle: "Plastic Waste",
    image: plastic,
    about: (
      <>
        Plastic waste presents a pressing global crisis, with millions of tons
        entering landfills and oceans annually. Its persistence in the
        environment for hundreds of years poses grave threats to wildlife and
        ecosystems. Recycling plastic is crucial for reducing pollution and
        conserving resources. However, effective waste management policies and
        widespread adoption of sustainable alternatives are necessary to combat
        this escalating issue.
        <br />
        <br />
        To address the challenges posed by plastic waste, it is imperative to
        implement comprehensive strategies that encompass reduction, reuse, and
        recycling. Recycling plastic involves collecting discarded plastic
        items, sorting them by type, and processing them into raw materials that
        can be used to manufacture new products. Technologies such as mechanical
        recycling, which involves melting and reshaping plastic waste into new
        items, and chemical recycling, which breaks down plastic into its
        constituent molecules for repurposing, offer promising solutions for
        diverting plastic waste from landfills and reducing environmental
        pollution. Additionally, promoting the use of biodegradable and
        compostable plastics, as well as encouraging the adoption of reusable
        alternatives, can help to minimize the production and accumulation of
        plastic waste in the environment. By implementing these measures and
        fostering a culture of environmental responsibility, we can work towards
        mitigating the impacts of plastic pollution and creating a more
        sustainable future for generations to come.
      </>
    ),
    recycle: (
      <>
        <span className="w-full grid grid-cols-2 gap-7">
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recyclePlastic1} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">1.</span>
              <span className="font-semibold">
                Recycle plastic bottles with the numbers 1 or 2 on the bottom.
              </span>{" "}
              The number etched into the bottom of a plastic bottle or jug is
              the resin number, which tells you what kind of plastic the bottle
              is made of. Plastics with the number 1 or 2 are the easiest and
              most commonly recyclable, meaning they can likely be taken by any
              recycling company.
              <br />
              <br />
              Resin numbers go from 1 to 7, with 7 being the hardest plastic to
              recycle. If your bottle has a number other than 1 or 2,
              double-check that your recycling center or company is able to take
              them. They may have other preparation steps to ensure they’re
              recycled properly.
            </p>
          </span>
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recyclePlastic2} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">2.</span>
              <span className="font-semibold">
                Rinse the bottle and remove the cap and label.
              </span>{" "}
              Empty the bottle if it contained water. For other liquids, fill
              the bottle partway with water, put the cap back on, shake it
              around a bit, and then empty the bottle. Then, ensure your bottle
              is ready to be recycled with similar plastic by removing any
              additional caps, labeling, or seals.
              <br />
              <br />
              The bottle doesn't need to be perfectly clean, but no residue
              should be inside. The material made to create bottle caps and
              labels can be different than the plastic of the bottles
              themselves. Most of the time, the cap and label can be left on the
              bottle; however, it’s always best to be safe. You can crush your
              plastic bottles to save space. Don't put your bottles or other
              recyclables in a bag (paper or plastic). Instead, put them
              directly into a recycling bin.
            </p>
          </span>
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recycleBloobin} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">3.</span>
              <span className="font-semibold">
                Put the bottles in Bloobin.
              </span>{" "}
              Your neighborhood may have designated recycling bins next to
              public garbage bins. Look for a map of recycling bin locations in
              your area on your community’s website.
            </p>
          </span>
        </span>
        <br />
        The process of recycling plastic typically begins with collection, where
        discarded plastic items are gathered from households, businesses, and
        recycling centers. These items are then sorted based on their resin
        type, as different types of plastic require different recycling
        processes. Once sorted, the plastic is cleaned to remove any
        contaminants, such as food residue or labels, that could interfere with
        the recycling process.
        <br />
        <br />
        After cleaning, the plastic undergoes processing to transform it into
        raw materials that can be used in the manufacturing of new products.
        Mechanical recycling is a common method where the plastic is shredded
        into small pieces, melted, and then formed into pellets or flakes. These
        pellets can be used to produce a wide range of items, including
        packaging materials, textiles, and construction materials. Additionally,
        advancements in technology have led to the development of chemical
        recycling methods, which break down plastic polymers into their
        molecular components for reuse in various applications.
      </>
    ),
  },
  {
    title: "Metal",
    fullTitle: "Metal Waste",
    image: metal,
    about: (
      <>
        Metal waste is a significant concern due to its environmental and
        economic impacts. Improper disposal leads to pollution and resource
        depletion. Recycling metal is vital for conserving natural resources,
        reducing energy consumption, and mitigating greenhouse gas emissions. By
        promoting recycling programs and incorporating recycled metal into
        manufacturing processes, industries and individuals can contribute to a
        more sustainable and circular economy.
        <br />
        <br />
        The process of recycling metal not only conserves resources but also
        helps to reduce the environmental footprint associated with metal
        extraction and production. Recycling metal requires significantly less
        energy compared to extracting raw materials from ore, resulting in lower
        carbon emissions and decreased reliance on fossil fuels. Furthermore,
        recycling metal reduces the need for landfill space, alleviating the
        burden on waste management systems and reducing the risk of
        environmental contamination.
      </>
    ),
    recycle: (
      <>
        <span className="w-full grid grid-cols-2 gap-7">
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recycleMetal1} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">1.</span>
              <span className="font-semibold">Recycle drink cans.</span>{" "}
              Typically made of aluminium, soda, beer and other beverage cans
              are 100 percent recyclable.
            </p>
          </span>
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recycleMetal2} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">2.</span>
              <span className="font-semibold">
                Recycle food containers.
              </span>{" "}
              Coffee tins, vegetable cans, aluminium foil and bakeware are all
              recyclable.
            </p>
          </span>
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recycleMetal3} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">3.</span>
              <span className="font-semibold">Rinse out thoroughly.</span> Get
              rid of all the contents and rinse the containers with water before
              recycling. Remove food scraps and oils as well.
            </p>
          </span>
          <span className="w-full flex flex-col space-y-7 p-7 rounded-lg bg-blue-100">
            <img src={recycleBloobin} alt="glass" className="rounded-lg" />
            <p>
              <span className="float-left text-5xl font-medium pr-3">4.</span>
              <span className="font-semibold">
                Put the bottles in Bloobin.
              </span>{" "}
              Your neighborhood may have designated recycling bins next to
              public garbage bins.
            </p>
          </span>
        </span>
        <br />
        Recycling metal begins with collection, where discarded metal items are
        gathered from households, businesses, and industries. These materials
        are then transported to recycling facilities, where they undergo sorting
        and processing. The metal is cleaned, sorted by type (such as aluminum,
        steel, copper, etc.), and then shredded or melted down to form raw
        materials. These materials are then used in various manufacturing
        processes to create new products, reducing the need for virgin resources
        and minimizing environmental impacts.
        <br />
        <br />
        Additionally, consumers can contribute to metal recycling by separating
        metal waste from other materials and disposing of it in designated
        recycling bins or centers. By participating in metal recycling efforts,
        individuals and communities can play a crucial role in preserving the
        environment and conserving valuable resources for future generations.
      </>
    ),
  },
  {
    title: "Trash",
    fullTitle: "Trash",
    image: trash,
    about: (
      <>
        General trash, comprising various materials like food waste, textiles,
        and non-recyclable plastics, poses substantial environmental challenges.
        Improper disposal results in overflowing landfills, pollution, and
        habitat destruction. Effective waste management strategies, including
        composting, incineration, and landfill diversion, are essential for
        minimizing these impacts. Additionally, public awareness campaigns and
        policies promoting waste reduction and recycling are crucial for
        fostering a more sustainable future.
        <br />
        <br />
        It is essential to implement comprehensive waste management systems that
        prioritize waste reduction, reuse, and recycling. Composting organic
        waste, such as food scraps and yard trimmings, can significantly reduce
        the volume of trash sent to landfills while also producing nutrient-rich
        soil amendments for agriculture and landscaping. Incineration, when
        conducted with proper emissions controls, can be utilized to generate
        energy from non-recyclable waste materials, thereby reducing the
        reliance on fossil fuels and mitigating greenhouse gas emissions.
        Moreover, diverting waste away from landfills through recycling programs
        not only conserves valuable resources but also helps to minimize the
        environmental impacts associated with landfilling, such as soil and
        water pollution. By adopting these waste management strategies and
        promoting sustainable consumption habits, communities can work towards
        creating a cleaner, healthier environment for current and future
        generations.
      </>
    ),
    recycle: (
      <>
        Recycling general trash involves a multi-step process that begins with
        sorting and separating different materials to facilitate their proper
        disposal and recycling. Recycling facilities employ various techniques,
        including manual sorting, automated sorting systems, and advanced
        sorting technologies, to segregate recyclable materials from
        non-recyclable waste streams. Once separated, recyclable materials such
        as plastics, paper, cardboard, glass, and metals undergo further
        processing to prepare them for recycling.
        <br />
        <br />
        The next step in the recycling process involves converting recyclable
        materials into raw materials or products that can be used in
        manufacturing processes. This often entails shredding or breaking down
        materials into smaller pieces, which are then cleaned, melted, or
        reprocessed into new products or materials. For example, plastic bottles
        may be melted down and molded into new containers, while paper and
        cardboard can be pulped and used to produce recycled paper products. By
        transforming recyclable materials into new resources, recycling helps to
        conserve natural resources, reduce energy consumption, and minimize
        environmental impacts associated with the extraction and production of
        raw materials. Additionally, incorporating recycled materials into
        manufacturing processes reduces the demand for virgin resources and
        helps to close the loop on the production cycle, promoting a more
        sustainable and circular economy.
      </>
    ),
  },
];
