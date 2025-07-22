import { FormLabel, Grid2, Slider, TextField, } from "@mui/material"
import { CheckItem, Container } from "./styles"

function RecipeApp() {

    return (<Container >

        <Grid2 container spacing={1} columns={{ xs: 1, md: 4 }}  >
            <Grid2 size={2} container  >
                <FormLabel>Nome da receita</FormLabel>
                <TextField id="recipeName" fullWidth variant="outlined" size="small" ></TextField >
            </Grid2>
            <Grid2 size={1} container  >
                <FormLabel >Preparo</FormLabel>
                <TextField id="recipeName" type="text" fullWidth variant="outlined" size="small" />
            </Grid2>
            <Grid2 size={1} container >
                <FormLabel >Dificuldade</FormLabel>
                <Slider id="dificulty" size="small" defaultValue={0} max={5} step={1} valueLabelDisplay="on" />
            </Grid2>
            <Grid2 size={4} container >
                <FormLabel >Como preparar</FormLabel>
                <TextField id="dificulty" multiline type="text" fullWidth minRows={2} maxRows={4} size="medium" />
            </Grid2>

        </Grid2>



    </Container>)
}

export default RecipeApp