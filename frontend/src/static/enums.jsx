import cardboard from "../assets/images/cardboard.png";
import plastic from "../assets/images/plastic.png";
import metal from "../assets/images/metal.png";
import trash from "../assets/images/trash.png";
import paper from "../assets/images/paper.png";
import glass from "../assets/images/glass.png";

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
        containers, and packaging materials, which are commonly used in households, 
        businesses, and the food and beverage industry. Unlike many other materials, 
        glass can be recycled indefinitely without losing quality or purity. By 
        recycling glass, communities can reduce the demand for virgin materials, 
        conserve natural resources like sand and limestone, and minimize energy 
        consumption and greenhouse gas emissions associated with glass production. 
        Additionally, incorporating recycled glass into manufacturing processes 
        helps to close the loop on the production cycle, promoting a more sustainable 
        and circular economy.
      </>
    ),
    recycle: (
      <>
        The process of recycling glass begins with collection, where discarded 
        glass items are gathered from households, businesses, and recycling 
        centers. It's essential to sort glass items by color to ensure that 
        they can be properly recycled, as different colors of glass require 
        separate recycling processes.
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
        contributing to environmental degradation and resource depletion. However, 
        paper waste also presents an opportunity for resource recovery and 
        conservation through recycling. The recycling process involves collecting, 
        sorting, and processing discarded paper materials to produce new paper 
        products. This closed-loop system helps to reduce the demand for virgin 
        materials, conserve natural resources like trees and water, and minimize 
        the energy and emissions associated with paper production. Additionally, 
        recycled paper products often require less energy and water to manufacture 
        compared to their counterparts made from virgin materials, further 
        contributing to environmental sustainability.
      </>
    ),
    recycle: (
      <>
        Recycling paper is a crucial step towards mitigating the environmental 
        impact of paper waste and promoting sustainable resource management. The 
        process of recycling paper begins with collection, where discarded paper 
        materials are gathered from households, businesses, and recycling centers. 
        It's important to ensure that collected paper is free from contaminants 
        such as food residue, plastics, and metals, as these can hinder the 
        recycling process.
        <br />
        <br />
        Once collected, the paper is transported to recycling facilities, where it 
        undergoes sorting and processing. At these facilities, the paper is sorted 
        based on type and grade, with different types of paper requiring different 
        recycling processes. The sorted paper is then cleaned, de-inked, and 
        shredded into small fibers. These fibers are mixed with water to create a 
        pulp, which is then refined and pressed into sheets to form new paper 
        products. By investing in paper recycling infrastructure and promoting the 
        use of recycled paper products, communities can reduce their reliance on 
        virgin materials, conserve natural resources, and minimize the environmental 
        impact of paper production and disposal.
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
        contributes to the generation of greenhouse gases, such as methane, as it 
        decomposes anaerobically.
      </>
    ),
    recycle: (
      <>
        The process of recycling cardboard typically begins with collection, where 
        discarded cardboard materials are gathered from households, businesses, and 
        recycling centers. It's crucial to ensure that the collected cardboard is 
        free from contaminants such as food residue, tape, and plastic packaging to 
        facilitate the recycling process.
        <br />
        <br />
        Once collected, the cardboard is transported to recycling facilities, where 
        it undergoes sorting and processing. At these facilities, the cardboard is 
        sorted based on grade and quality to ensure that only suitable materials are 
        processed for recycling. The cardboard is then shredded into small pieces and 
        mixed with water to create a pulp. This pulp is then cleaned, refined, and 
        pressed into sheets, forming new cardboard materials. These recycled cardboard 
        sheets can be used to manufacture a wide range of products, including packaging 
        materials, boxes, and paperboard. 
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
        recycling. Recycling plastic involves collecting discarded plastic items, 
        sorting them by type, and processing them into raw materials that can be 
        used to manufacture new products. Technologies such as mechanical 
        recycling, which involves melting and reshaping plastic waste into new 
        items, and chemical recycling, which breaks down plastic into its 
        constituent molecules for repurposing, offer promising solutions for 
        diverting plastic waste from landfills and reducing environmental 
        pollution. Additionally, promoting the use of biodegradable and 
        compostable plastics, as well as encouraging the adoption of reusable 
        alternatives, can help to minimize the production and accumulation of 
        plastic waste in the environment. By implementing these measures and 
        fostering a culture of environmental responsibility, we can work towards 
        mitigating the impacts of plastic pollution and creating a more sustainable 
        future for generations to come.
      </>
    ),
    recycle: (
      <>
        The process of recycling plastic typically begins with collection, where 
        discarded plastic items are gathered from households, businesses, and 
        recycling centers. These items are then sorted based on their resin type, 
        as different types of plastic require different recycling processes. Once 
        sorted, the plastic is cleaned to remove any contaminants, such as food 
        residue or labels, that could interfere with the recycling process.
        <br />
        <br />
        After cleaning, the plastic undergoes processing to transform it into raw 
        materials that can be used in the manufacturing of new products. Mechanical 
        recycling is a common method where the plastic is shredded into small 
        pieces, melted, and then formed into pellets or flakes. These pellets can 
        be used to produce a wide range of items, including packaging materials, 
        textiles, and construction materials. Additionally, advancements in 
        technology have led to the development of chemical recycling methods, which 
        break down plastic polymers into their molecular components for reuse in 
        various applications. 
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
        The process of recycling metal not only conserves resources but also helps 
        to reduce the environmental footprint associated with metal extraction and 
        production. Recycling metal requires significantly less energy compared to 
        extracting raw materials from ore, resulting in lower carbon emissions and 
        decreased reliance on fossil fuels. Furthermore, recycling metal reduces 
        the need for landfill space, alleviating the burden on waste management 
        systems and reducing the risk of environmental contamination.
      </>
    ),
    recycle: (
      <>
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
        energy from non-recyclable waste materials, thereby reducing the reliance 
        on fossil fuels and mitigating greenhouse gas emissions. Moreover, 
        diverting waste away from landfills through recycling programs not only 
        conserves valuable resources but also helps to minimize the environmental 
        impacts associated with landfilling, such as soil and water pollution. By 
        adopting these waste management strategies and promoting sustainable 
        consumption habits, communities can work towards creating a cleaner, 
        healthier environment for current and future generations.
      </>
    ),
    recycle: (
      <>
        Recycling general trash involves a multi-step process that begins with 
        sorting and separating different materials to facilitate their proper 
        disposal and recycling. Recycling facilities employ various techniques, 
        including manual sorting, automated sorting systems, and advanced sorting 
        technologies, to segregate recyclable materials from non-recyclable waste 
        streams. Once separated, recyclable materials such as plastics, paper, 
        cardboard, glass, and metals undergo further processing to prepare them 
        for recycling.
        <br />
        <br />
        The next step in the recycling process involves converting recyclable 
        materials into raw materials or products that can be used in manufacturing 
        processes. This often entails shredding or breaking down materials into 
        smaller pieces, which are then cleaned, melted, or reprocessed into new 
        products or materials. For example, plastic bottles may be melted down 
        and molded into new containers, while paper and cardboard can be pulped 
        and used to produce recycled paper products. By transforming recyclable 
        materials into new resources, recycling helps to conserve natural 
        resources, reduce energy consumption, and minimize environmental impacts 
        associated with the extraction and production of raw materials. 
        Additionally, incorporating recycled materials into manufacturing processes 
        reduces the demand for virgin resources and helps to close the loop on the 
        production cycle, promoting a more sustainable and circular economy.
      </>
    ),
  },
];
